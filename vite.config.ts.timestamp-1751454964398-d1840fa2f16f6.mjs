// vite.config.ts
import { defineConfig } from "file:///C:/Users/Developer/CascadeProjects/layrix-ui/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Developer/CascadeProjects/layrix-ui/node_modules/@vitejs/plugin-react/dist/index.mjs";
import vitePluginMdx from "file:///C:/Users/Developer/CascadeProjects/layrix-ui/node_modules/@mdx-js/rollup/index.js";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\Developer\\CascadeProjects\\layrix-ui";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    vitePluginMdx({
      jsxImportSource: "react",
      remarkPlugins: [],
      rehypePlugins: []
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    },
    extensions: [".js", ".ts", ".tsx", ".mdx"]
  },
  optimizeDeps: {
    include: ["@mdx-js/react", "clsx", "tailwind-merge"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxEZXZlbG9wZXJcXFxcQ2FzY2FkZVByb2plY3RzXFxcXGxheXJpeC11aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcRGV2ZWxvcGVyXFxcXENhc2NhZGVQcm9qZWN0c1xcXFxsYXlyaXgtdWlcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0RldmVsb3Blci9DYXNjYWRlUHJvamVjdHMvbGF5cml4LXVpL3ZpdGUuY29uZmlnLnRzXCI7Ly8gdml0ZS5jb25maWcudHNcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCB2aXRlUGx1Z2luTWR4IGZyb20gJ0BtZHgtanMvcm9sbHVwJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICB2aXRlUGx1Z2luTWR4KHtcbiAgICAgIGpzeEltcG9ydFNvdXJjZTogJ3JlYWN0JyxcbiAgICAgIHJlbWFya1BsdWdpbnM6IFtdLFxuICAgICAgcmVoeXBlUGx1Z2luczogW10sXG4gICAgfSksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSxcbiAgICB9LFxuICAgIGV4dGVuc2lvbnM6IFsnLmpzJywgJy50cycsICcudHN4JywgJy5tZHgnXSxcbiAgfSxcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgaW5jbHVkZTogWydAbWR4LWpzL3JlYWN0JywgJ2Nsc3gnLCAndGFpbHdpbmQtbWVyZ2UnXSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLFVBQVU7QUFKakIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sY0FBYztBQUFBLE1BQ1osaUJBQWlCO0FBQUEsTUFDakIsZUFBZSxDQUFDO0FBQUEsTUFDaEIsZUFBZSxDQUFDO0FBQUEsSUFDbEIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLElBQ0EsWUFBWSxDQUFDLE9BQU8sT0FBTyxRQUFRLE1BQU07QUFBQSxFQUMzQztBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1osU0FBUyxDQUFDLGlCQUFpQixRQUFRLGdCQUFnQjtBQUFBLEVBQ3JEO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
