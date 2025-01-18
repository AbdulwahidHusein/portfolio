export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['groq-sdk'], // Ensure it's pre-bundled
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      // Remove `external: ['groq-sdk']`
    },
  },
});
