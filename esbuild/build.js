import esbuild from 'esbuild';

await esbuild.build({
    entryPoints: ['src/main.js'],
    outfile: 'dist/main.js',
    format: 'esm',
    bundle: true,
    loader: {
        '.js': 'jsx',
    },
    external: ['react', 'react-dom'],
    logLevel: 'info',
});
