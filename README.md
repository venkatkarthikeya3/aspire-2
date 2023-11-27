# com.aspire.test (aspire)

Aspire Frontend test

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Know Issues:

Please note the following issues while looking at the app:

1. Icons in the nav bar (Home, Payments, Credit etc..) won't change color based on 'active' status of the link. Reason: Need active state icons.
2. While moving from desktop to mobile and back to desktop, card carousel is not adjusting the items to show (known problem with the vue3 slider library used). It is advised to refresh the page after adjusting screen size.
