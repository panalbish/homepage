// Components
import Title from '../components/title';

// Layouts
import Page from '../layouts/page';

export default () => (
  <Page>
    <Title />

    <section>
      <h1>Bishal</h1>
    </section>

    <nav>
      <a href="https://twitter.com/panalbish">Thoughts</a>
      <a href="https://github.com/panalbish">Code</a>
    </nav>

    <style jsx>
      {`
        section h1 {
          font-size: 57px;
          left: 35px;
          top: 35px;
          font-weight: 300;
          margin: 0;
          position: absolute;
          padding-right: 35px;
          line-height: 1.2em;
        }
        section h1:focus {
          outline: none;
        }
        nav {
          position: absolute;
          left: 25px;
          bottom: 27px;
        }

        nav a {
          text-decoration: none;
          color: #000;
          font-size: 16px;
          padding: 10px;
          display: block;
        }

        @media (min-width: 768px) {
          section {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            text-align: center;
            display: flex;
            height: inherit;
            align-items: center;
            justify-content: center;
            user-select: none;
            cursor: default;
          }
          section h1 {
            position: relative;
            display: inline-block;
            left: auto;
            top: auto;
            padding-right: 0;
            font-size: 73px;
            color: #454545;
            font-weight: 200;
          }
          section h1::before,
          section h1::before {
            content: '„';
            top: 10px;
            right: -15px;
          }
          section h1::after {
            content: '„';
            left: -15px;
            bottom: 0;
          }

          nav {
            left: 30px;
            right: 30px;
            white-space: nowrap;
            text-align: center;
            bottom: 30px;
            font-size: 0;
          }
          nav a {
            font-size: 15px;
            padding: 4px 10px;
            color: #454545;
            display: inline-block;
            border-radius: 6px;
            margin: 0 5px;
            transition: all 0.2s;
          }
          nav a:hover {
            background: #efefef;
          }
        }

        @media (max-height: 390px) and (min-width: 768px) {
          nav {
            display: none;
          }
        }
      `}
    </style>
  </Page>
);
