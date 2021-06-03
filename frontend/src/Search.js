import axios from 'axios';

function SearchBar() {
    const DOC_URL = "http://localhost:3000/documents/?name="

    const searchFocDoc = () => {
        let searchedDoc = document.getElementById("header-search").value;
        axios.get(DOC_URL + searchedDoc)
        .then(res => {
            console.log(res);
            if (searchedDoc.localeCompare(res.data[0].name) === 0) {
                console.log("Document found!");
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <form action="/" method="get" className="docs_header">
            <input type="text" id="header-search" placeholder="Search documents..." />
            <button type="button" onClick={searchFocDoc}>Search</button>
        </form>
    );
}

export default SearchBar;