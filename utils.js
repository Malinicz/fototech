/* eslint no-param-reassign: 0 */

import pl from './src/data/pl';
import { siteRoot } from './static.config';

export const flattenContactDetails = (items) => {
  const rawDetails = items.filter(
    (item) =>
      item.sys &&
      item.sys.contentType &&
      item.sys.contentType.sys &&
      item.sys.contentType.sys.id === 'contactDetails'
  );

  return rawDetails.reduce((result, details, index) => {
    const locationDetails = {
      id: (details.fields && details.fields.id) || index,
      label: (details.fields && details.fields.label) || '',
      street: (details.fields && details.fields.street) || '',
      postalCode: (details.fields && details.fields.postalCode) || '',
      city: (details.fields && details.fields.city) || '',
      phone: (details.fields && details.fields.phone) || '',
      email: (details.fields && details.fields.email) || '',
      lat:
        (details.fields &&
          details.fields.location &&
          details.fields.location.lat) ||
        0,
      lon:
        (details.fields &&
          details.fields.location &&
          details.fields.location.lon) ||
        0,
      openingHours: (details.fields && details.fields.openingHours) || [],
      showOnMapLabel: 'Pokaż na mapie',
    };

    result[locationDetails.id] = locationDetails;

    return result;
  }, {});
};

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
        slug: slug.toLowerCase(),
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
      } = defect.fields;

      return {
        title,
        slug: slug.toLowerCase(),
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
                    slug: nextCategory.fields.slug.toLowerCase(),
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
                    slug: nextDeviceModel.fields.slug.toLowerCase(),
                    company: {
                      name:
                        nextDeviceModel.fields.deviceCompany &&
                        nextDeviceModel.fields.deviceCompany.fields &&
                        nextDeviceModel.fields.deviceCompany.fields.name,
                      slug:
                        nextDeviceModel.fields.deviceCompany &&
                        nextDeviceModel.fields.deviceCompany.fields &&
                        nextDeviceModel.fields.deviceCompany.fields.slug.toLowerCase(),
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
                        nextDeviceModel.fields.deviceType.fields.slug.toLowerCase(),
                    },
                    defect: {
                      title,
                      slug: slug.toLowerCase(),
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
      };
    });

  return defects;
};

// TODO make this more readable :(
export function getRouteData(defects) {
  return defects.reduce((result, nextDefect) => {
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

// TODO make this more readable :(
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

    const defaultData = {
      path: `/uslugi/${slug}`,
      component: componentMap[levelIndex],
    };

    switch (levelIndex) {
      case 0:
        return {
          ...defaultData,
          getData: () => ({
            routeData: {
              ...pl.services,
              hardwareTypes: routeData[slug].reduce((result, model) => {
                return result.find((t) => t.slug === model.type.slug)
                  ? result
                  : [...result, model.type];
              }, []),
              path: `/uslugi/${slug}`,
            },
            canonicalUrl: `${siteRoot}/${slug}`,
          }),
        };
      case 1:
        return {
          ...defaultData,
          getData: () => ({
            routeData: {
              ...pl.services,
              companies: routeData[slug].reduce((result, model) => {
                return result.find((t) => t.slug === model.company.slug)
                  ? result
                  : [...result, model.company];
              }, []),
              breadcrumber: routeData[slug].length > 0 && routeData[slug][0],
              path: `/uslugi/${slug}`,
            },
            canonicalUrl: `${siteRoot}/${slug}`,
          }),
        };
      case 2:
        return {
          ...defaultData,
          getData: () => ({
            routeData: {
              ...pl.services,
              models: routeData[slug].reduce((result, model) => {
                const typeSlug = slug.split('/')[1];

                if (model.type.slug !== typeSlug) {
                  return result;
                }

                return result.find((t) => t.slug === model.slug)
                  ? result
                  : [...result, model];
              }, []),
              breadcrumber: routeData[slug].length > 0 && routeData[slug][0],
              path: `/uslugi/${slug}`,
            },
            canonicalUrl: `${siteRoot}/${slug}`,
          }),
        };
      case 3:
        return {
          ...defaultData,
          getData: () => ({
            routeData: {
              ...pl.services,
              defects: routeData[slug].reduce((result, model) => {
                return result.find((t) => t.slug === model.defect.slug)
                  ? result
                  : [...result, model.defect];
              }, []),
              breadcrumber: routeData[slug].length > 0 && routeData[slug][0],
              path: `/uslugi/${slug}`,
            },
            canonicalUrl: `${siteRoot}/${slug}`,
          }),
        };
      default:
        return {
          ...defaultData,
          getData: () => ({
            routeData: {
              ...pl.services,
              models: [],
              path: `/uslugi/${slug}`,
            },
            canonicalUrl: `${siteRoot}/${slug}`,
          }),
        };
    }
  });
}
