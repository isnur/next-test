import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Content from '../components/Content'
import Menu from '../components/Menu'

const Index = () => {
  const router = useRouter()
  const caseId = router.query && router.query.case ? router.query.case : '1'
  return (
    <Layout>
      <Header />
      <Content caseId={caseId} />
      <Menu caseId={caseId} />
        <style jsx global>{`
          body {
            margin: 0;
            font-family: sans-serif;
            font-size: 14px;
            font-weight: 200;
            color: #4a4a4a;
            background-color: #f7f7f7;
          }
          .wrapper {
            width: 100%;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
          }
          .container {
            width: 100%;
            max-width: 480px;
            display: flex;
          }
          h1 {
            font-size: 20px;
          }
          h2 {
            color: #4a4a4a;
            font-size: 18px;
            line-height: 24px;
          }
        `}</style>
    </Layout>
  )
};

export default Index;