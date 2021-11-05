import type { NextPage } from 'next';
import Layout from '../components/Layout';
import Wizard from '../components/Wizard';

const Index: NextPage = () => {
	return <Layout>
		<Wizard />
	</Layout>
}
export default Index;