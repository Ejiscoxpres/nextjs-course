import {useRouter} from 'next/router';

export default function SelectedClientProjectPage(){

    const router =useRouter();
    console.log(router.query);
    return(
        <div>
            <h1>The project for a project for selected client</h1>
        </div>
    );
}