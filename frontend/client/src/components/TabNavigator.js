import React from 'react';
import useFetch from '../functions/useFetch';

const TabNav = (props) => {
    let id = props.match.params.id
    id = id.replace(/\s+/g, '-')
    console.log(id)
    const subCats = useFetch(`https://empact-e511a.firebaseio.com/${id}.json`);
    // console.log('subCats', subCats)
    // console.log('props', props.match.params.id)

    return(

        <div>
            {Object.keys(subCats).map(subCat => { 
                return (
                <div>
                    {subCat}
                </div>
                )
            })}
        </div>
    );
}

export default TabNav;

// str = str.replace(/\s+/g, '')