import {useRouter} from 'next/router';

export default function SelectedClientProjectPage(){

    const router =useRouter();
    console.log(router.query);
    return(
        <div>
            <h1>The project Page for a specific project for a selected client</h1>
        </div>
    );
}