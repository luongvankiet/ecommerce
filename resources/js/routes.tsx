export const routes = {
  auth: {
    login: 'login',
    register: 'register',
    logout: 'logout',
    forgotPassword: 'password.email',
    confirmPassword: 'password.confirm',
    resetPassword: 'password.update',
    twoFactorLogin: 'two-factor.login',
    sendVerification: 'verification.send',
    permissions: {
      index: 'permissions.index',
      check: 'permissions.check',
    },
  },
  dashboard: {
    index: 'dashboard',
    brands: {
      index: 'dashboard.brands.index',
      create: 'dashboard.brands.create',
      store: 'dashboard.brands.store',
      edit: 'dashboard.brands.edit',
      update: 'dashboard.brands.update',
      destroy: 'dashboard.brands.destroy',
      deleteMany: 'dashboard.brands.delete-many',
      restoreMany: 'dashboard.brands.restore-many',
    },
    categories: {
      index: 'dashboard.categories.index',
      create: 'dashboard.categories.create',
      store: 'dashboard.categories.store',
      edit: 'dashboard.categories.edit',
      update: 'dashboard.categories.update',
      destroy: 'dashboard.categories.destroy',
      deleteMany: 'dashboard.categories.delete-many',
      restoreMany: 'dashboard.categories.restore-many',
    },
    products: {
      index: 'dashboard.products.index',
      create: 'dashboard.products.create',
      store: 'dashboard.products.store',
      edit: 'dashboard.products.edit',
      update: 'dashboard.products.update',
      destroy: 'dashboard.products.destroy',
      deleteMany: 'dashboard.products.delete-many',
      restoreMany: 'dashboard.products.restore-many',
    },
    variants: {
      index: 'dashboard.variants.index',
      create: 'dashboard.variants.create',
      store: 'dashboard.variants.store',
      edit: 'dashboard.variants.edit',
      update: 'dashboard.variants.update',
      destroy: 'dashboard.variants.destroy',
      deleteMany: 'dashboard.variants.delete-many',
      restoreMany: 'dashboard.variants.restore-many',
    },
    customers: {
      index: 'dashboard.customers.index',
      create: 'dashboard.customers.create',
      store: 'dashboard.customers.store',
      edit: 'dashboard.customers.edit',
      update: 'dashboard.customers.update',
      destroy: 'dashboard.customers.destroy',
      deleteMany: 'dashboard.customers.delete-many',
      restoreMany: 'dashboard.customers.restore-many',
      addresses: {
        store: 'dashboard.customers.addresses.store',
        update: 'dashboard.customers.addresses.update',
      },
    },
    orders: {
      index: 'dashboard.orders.index',
      create: 'dashboard.orders.create',
      store: 'dashboard.orders.store',
      edit: 'dashboard.orders.edit',
      update: 'dashboard.orders.update',
      destroy: 'dashboard.orders.destroy',
      deleteMany: 'dashboard.orders.delete-many',
      restoreMany: 'dashboard.orders.restore-many',
    },
    images: {
      destroy: 'dashboard.images.destroy',
    },
    addresses: {
      index: 'dashboard.addresses.index',
      create: 'dashboard.addresses.create',
      store: 'dashboard.addresses.store',
      edit: 'dashboard.addresses.edit',
      update: 'dashboard.addresses.update',
      destroy: 'dashboard.addresses.destroy',
      deleteMany: 'dashboard.addresses.delete-many',
    },
    settings: {
      index: 'dashboard.settings',
      users: {
        index: 'dashboard.users.index',
        create: 'dashboard.users.create',
        store: 'dashboard.users.store',
        edit: 'dashboard.users.edit',
        update: 'dashboard.users.update',
        destroy: 'dashboard.users.destroy',
        deleteMany: 'dashboard.users.delete-many',
        restoreMany: 'dashboard.users.restore-many',
        resendVerifyEmail: 'dashboard.users.resend-verify-email',
      },
      roles: {
        index: 'dashboard.roles.index',
        create: 'dashboard.roles.create',
        store: 'dashboard.roles.store',
        edit: 'dashboard.roles.edit',
        update: 'dashboard.roles.update',
        destroy: 'dashboard.roles.destroy',
        deleteMany: 'dashboard.roles.delete-many',
      },
    },
  },
  client: {
    index: 'home',
    about: 'about',
    contact: 'contact',
    faqs: 'faqs',
    shop: 'shop',
    productDetail: 'products.show',
  },
  api: {
    products: {
      index: 'api.products.index',
      priceRange: 'api.products.price-range',
      reviews: {
        index: 'api.products.reviews.index',
        store: 'api.products.reviews.store',
        reactions: {
          index: 'api.products.reviews.reactions.index',
          update: 'api.products.reviews.reactions.update',
          destroy: 'api.products.reviews.reactions.destroy',
        },
      },
      variants: {
        index: 'api.products.variants.index',
      },
    },
    categories: {
      index: 'api.categories.index',
    },
    brands: {
      index: 'api.brands.index',
    },
    options: {
      index: 'api.options.index',
    },
  },
};
