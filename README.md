# DAEGU, YOUR WAY — 大邱双语旅游展示网站

一个纯静态、响应式的韩国大邱旅游资源展示网站。所有网站文案均提供中文与韩文。

## 文件
- `index.html`：页面结构与中韩双语内容
- `styles.css`：视觉样式、响应式布局与移动端菜单
- `script.js`：导航菜单、目的地筛选、收藏交互

## 本地预览
直接双击 `index.html`，或在项目目录运行：
```bash
python3 -m http.server 8000
```
然后访问 http://localhost:8000

## 部署
可直接上传整个文件夹到 GitHub Pages、Netlify、Vercel Static 或任意静态 Web 主机。无需构建、数据库、后端或安装依赖。

## 注意
- 页面照片通过 Unsplash 图片 CDN 加载，Google Fonts 用于字体；因此图片和字体需要联网。
- 地图链接跳转至 Google Maps 搜索/路线页面。
- 景点开放时间、票价、夜市运营与活动安排可能变化；本网站未硬编码易变信息，请以各场所官方公告为准。
- 网站内容为旅游灵感介绍，不代表官方旅游机构。
