import esbuild from 'esbuild';

let context = await esbuild.context({
    entryPoints: ['src/main.js'],
    outfile: 'dist/main.js',
    format: 'esm',
    bundle: true,
    loader: {
        '.js': 'jsx',
    },
    // https://esbuild.github.io/content-types/#auto-import-for-jsx
    jsx: 'automatic',
    external: ['react', 'react-dom'],
    logLevel: 'info',
});

await context.watch()

await context.serve({
  servedir: 'dist',
})
