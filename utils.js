import pl from './src/data/pl';
import { siteRoot } from './static.config';

export const flattenPosts = (items) => {
  return items
    .filter(
      (item) =>
        item.sys &&
        item.sys.contentType &&
        item.sys.contentType.sys &&
        item.sys.contentType.sys.id === 'blogPost'
    )
    .map((post) => {
      const {
        title,
        slug,
        content,
        leadParagraph,
        imageLarge,
        imageSmall,
      } = post.fields;

      return {
        title,
        slug,
        content,
        imageLarge:
          imageLarge &&
          imageLarge.fields &&
          imageLarge.fields.file &&
          `https:${imageLarge.fields.file.url}`,
        imageSmall:
          imageSmall &&
          imageSmall.fields &&
          imageSmall.fields.file &&
          `https:${imageSmall.fields.file.url}`,
        leadParagraph,
        createdAt: post.sys.createdAt,
      };
    });
};

export const flattenDefects = (items) => {
  const defects = items
    .filter(
      (item) =>
        item.sys &&
        item.sys.contentType &&
        item.sys.contentType.sys &&
        item.sys.contentType.sys.id === 'defect'
    )
    .map((defect) => {
      const {
        title,
        slug,
        description,
        priceMin,
        priceMax,
        serviceCategory,
        deviceModel,
        image,
        videoUrl,
      } = defect.fields;

      return {
        title,
        slug,
        description,
        priceMin,
        priceMax,
        serviceCategories: serviceCategory.reduce(
          (result, nextCategory) =>
            nextCategory && nextCategory.fields
              ? [
                  ...result,
                  {
                    name: nextCategory.fields.name,
                    slug: nextCategory.fields.slug,
                  },
                ]
              : result,
          []
        ),
        deviceModels: deviceModel.reduce(
          (result, nextDeviceModel) =>
            nextDeviceModel && nextDeviceModel.fields
              ? [
                  ...result,
                  {
                    name: nextDeviceModel.fields.name,
                    slug: nextDeviceModel.fields.slug,
                    company: {
                      name:
                        nextDeviceModel.fields.deviceCompany &&
                        nextDeviceModel.fields.deviceCompany.fields &&
                        nextDeviceModel.fields.deviceCompany.fields.name,
                      slug:
                        nextDeviceModel.fields.deviceCompany &&
                        nextDeviceModel.fields.deviceCompany.fields &&
                        nextDeviceModel.fields.deviceCompany.fields.slug,
                      logo:
                        nextDeviceModel.fields.deviceCompany &&
                        nextDeviceModel.fields.deviceCompany.fields &&
                        nextDeviceModel.fields.deviceCompany.fields.logo &&
                        nextDeviceModel.fields.deviceCompany.fields.logo
                          .fields &&
                        nextDeviceModel.fields.deviceCompany.fields.logo
                          .fields &&
                        nextDeviceModel.fields.deviceCompany.fields.logo.fields
                          .file &&
                        `https:${
                          nextDeviceModel.fields.deviceCompany.fields.logo
                            .fields.file.url
                        }`,
                    },
                    type: {
                      name:
                        nextDeviceModel.fields.deviceType &&
                        nextDeviceModel.fields.deviceType.fields &&
                        nextDeviceModel.fields.deviceType.fields.name,
                      slug:
                        nextDeviceModel.fields.deviceType &&
                        nextDeviceModel.fields.deviceType.fields &&
                        nextDeviceModel.fields.deviceType.fields.slug,
                    },
                    defect: {
                      title,
                      slug,
                      description,
                      priceMin,
                      priceMax,
                    },
                  },
                ]
              : result,
          []
        ),
        imageUrl:
          image &&
          image.fields &&
          image.fields.file &&
          `https:${image.fields.file.url}`,
        videoUrl,
      };
    });

  return defects;
};

export function getRouteData(defects) {
  return defects.reduce((accumulatedDefects, nextDefect) => {
    const result = { ...accumulatedDefects };

    nextDefect.serviceCategories.forEach((category) => {
      const categoryLevelKey = `${category.slug}`;

      if (result[categoryLevelKey]) {
        result[categoryLevelKey] = [
          ...result[categoryLevelKey],
          ...nextDefect.deviceModels,
        ];
      } else {
        result[categoryLevelKey] = [...nextDefect.deviceModels];
      }

      nextDefect.deviceModels.forEach((deviceModel) => {
        const deviceTypeLevelKey = `${category.slug}/${deviceModel.type.slug}`;

        if (result[deviceTypeLevelKey]) {
          result[deviceTypeLevelKey] = [
            ...result[deviceTypeLevelKey],
            ...nextDefect.deviceModels.filter(
              (m) => m.type.slug === deviceModel.type.slug
            ),
          ];
        } else {
          result[deviceTypeLevelKey] = [
            ...nextDefect.deviceModels.filter(
              (m) => m.type.slug === deviceModel.type.slug
            ),
          ];
        }

        const companyLevelKey = `${category.slug}/${deviceModel.type.slug}/${
          deviceModel.company.slug
        }`;

        if (result[companyLevelKey]) {
          result[companyLevelKey] = [
            ...result[companyLevelKey],
            ...nextDefect.deviceModels.filter(
              (m) => m.company.slug === deviceModel.company.slug
            ),
          ];
        } else {
          result[companyLevelKey] = [
            ...nextDefect.deviceModels.filter(
              (m) => m.company.slug === deviceModel.company.slug
            ),
          ];
        }

        const modelLevelKey = `${category.slug}/${deviceModel.type.slug}/${
          deviceModel.company.slug
        }/${deviceModel.slug}`;

        if (result[modelLevelKey]) {
          result[modelLevelKey] = [
            ...result[modelLevelKey],
            ...nextDefect.deviceModels.filter(
              (m) => m.slug === deviceModel.slug
            ),
          ];
        } else {
          result[modelLevelKey] = [
            ...nextDefect.deviceModels.filter(
              (m) => m.slug === deviceModel.slug
            ),
          ];
        }
      });
    });

    return result;
  }, {});
}

export function getServicesDynamicRoutes(routeData) {
  const componentMap = {
    0: 'src/scenes/Services',
    1: 'src/scenes/Services/CompanyLevel',
    2: 'src/scenes/Services/ModelLevel',
    3: 'src/scenes/Services/DefectLevel',
  };

  return Object.keys(routeData).map((slug) => {
    const splittedSlug = slug.split('/');
    const levelIndex = splittedSlug.length - 1;

    return {
      path: `/uslugi/${slug}`,
      component: componentMap[levelIndex],
      getData: () => ({
        routeData: {
          ...pl.services,
          models: routeData[slug],
          path: `/uslugi/${slug}`,
        },
        canonicalUrl: `${siteRoot}${slug}`,
      }),
    };
  });
}
