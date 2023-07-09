import Document,{Html,Head,Main,NextScript} from "next/document";
// 在 Next.js 中，_document.js 是一个特殊的文件，用于自定义 HTML 文档的初始渲染。它是 Next.js 提供的一个可扩展的文档组件，可以用来包装整个应用程序的根组件。


class MyDocument extends Document {
    render() {
      return (
        <Html>
          <Head>
            {/* 添加全局 CSS */}
            <style>{`
              body {
                margin: 0;
                padding: 0;
              }
            `}</style>
          </Head>
          <body>
            <Main />
            <NextScript />
            {/* 添加第三方脚本 */}
            <script src="https://example.com/script.js" />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;