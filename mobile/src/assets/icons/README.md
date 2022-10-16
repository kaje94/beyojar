## Icons

> [Iconsax](https://iconsax.io/) icons have been used throughout the application.

Steps to follow when adding new icons

1. Select the preferred SVG icon from [Iconsax](https://iconsax.io/) Icon pack
2. Use [react-svgr](https://react-svgr.com/playground/?native=true&typescript=true) to convert and optimize SVGs fro react-native into react react-native components
3. Create new icon file similar to other icon files
4. Copy over the content from [react-svgr](https://react-svgr.com/playground/?native=true&typescript=true) into the newly created component
5. Update the `viewBox` prop as `"0 0 24 24"` to ensure the icon scales based on the provided size
6. Add a new story in `icons.stories.tsx` for the newly created icon

Read [Expo docs](https://docs.expo.dev/versions/latest/sdk/svg/) for more information on how to use SVGs in React-Native/Expo
