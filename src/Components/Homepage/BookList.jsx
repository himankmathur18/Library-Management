import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

class BookList extends Component {
    state = {
        books: [],
        error: "",
    };

    componentDidMount() {
        const API_URL = "https://www.freetestapi.com/api/v1/books?q=javascript";

        axios
            .get(API_URL)
            .then((response) => {
                this.setState({ books: response.data.items || [] });
            })
            .catch((error) => {
                this.setState({ error: "Error fetching books. Please try again later." });
                console.error("API Error:", error);
            });
    }

    render() {
        const { books, error } = this.state;

        return (
            <div>
                <form className="ml-[35rem]">
                    <div className="relative flex text-right">
                        <input type="search" id="default-search" className="border rounded-2xl p-2 bg-gray-400 text-2xl mt-[9px] " placeholder="Search" required />
                        <button type="submit" className="text-black text-center bg-gray-500 border rounded-2xl mt-[10px] p-5 bg-transparent text-2xl"> <FaSearch/></button>
                    </div>
                </form>
                
                {error && <p style={{ color: "red" }}>{error}</p>}
                <ul>
                    {books.map((book) => (
                        <li key={book.id}>{book.volumeInfo.title}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
export default BookList;