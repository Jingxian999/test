require('dotenv').config();
const { notarize } = require('electron-notarize');

exports.default = async function notarizing(context) {
  const { electronPlatformName, appOutDir } = context;  
  if (electronPlatformName !== 'darwin') {
    console.log("Skipping notarization: not on macOS");
    return;
  }
  // if (!process.env.API_KEY_ID|| !process.env.API_KEY_ISSUER_ID) {
  //   console.log("Skipping notarization: missing Apple ID or password");
  //   return;
  // }

  const appName = context.packager.appInfo.productFilename;

//   return await notarize({
//     appBundleId: "com.sandeepzgk.hcomposer",
//     appPath: `${appOutDir}/${appName}.app`,
//     appleId: process.env.APPLEID,
//     appleIdPassword: process.env.APPLEIDPASS,
//   });
try {
    await notarize({
      tool: 'notarytool', 
      appBundleId: "com.sandeepzgk.hcomposer",
      appPath: `${appOutDir}/${appName}.app`,
      // appleId: process.env.APPLEID,
      // appleIdPassword: process.env.APPLEIDPASS,
      appleApiKey: '3YK6J5LXFG',
      appleApiIssuer: '8ec4fd53-115a-4083-9abd-8c3fe9f95ed3',
    });
    console.log("Notarization completed successfully");
  } catch (error) {
    console.error("Notarization failed:", error);
  }
};

// async function notarizing(appBundleId, appPath) {
//     try {
//       await notarize({
//         appBundleId: appBundleId,
//         appPath: appPath,
//         appleId: process.env.APPLEID,
//         appleIdPassword: process.env.APPLEIDPASS,
//       });
//       console.log('Notarization successful');
//     } catch (error) {
//       console.error('Notarization failed:', error);
//     }
//   }
  
//   // Example usage
//   async function main() {
//     const appBundleId = "com.sandeepzgk.hcomposer";
//     const appPath = "/path/to/your/app.app"; // Replace this with the actual app path
//     await notarizing(appBundleId, appPath);
//   }
  
//   main();
