Hopefully this turns into something cool

### How to start a typescript node project
1. Create an empty directory and navigate to it in terminal
2. Run `npm init -y`
3. Run `tsc --init`
4. In `package.json`, add script `start: tsc && node build/index.js`
4. In the `tsconfig.json`, comment out and edit `rootDir`, `outDir`, and `moduleResolution`
4. Run `npm install typescript --save-dev`
5. Add an `index.ts` to `src` directory and get coding