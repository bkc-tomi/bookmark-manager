import {GetServerSideProps} from "next"
import { useContext } from "react";
import Layout from "../../components/layout";
import { Store } from "../../components/Store";

export default function SearchResult() {
    const { State, setState } = useContext(Store);
    return (
        <Layout>
            <div>
                search result .
            </div>
        </Layout>
    );
}

export const getServerSideProps:GetServerSideProps = async(context) => {
    console.log(context.params);
    return {
        props: {

        }
    };
}