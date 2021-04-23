
class BooksService {

    getResource = async (url) => {
        const res = await fetch(url);
        if (!res.ok){
            throw new Error(`Could not fetch, status: ${res.status}`);
        }
        return await res.json();
    };

    getAllBooks = async () => {
        const res = await this.getResource("/books");
        return res.map(book => this._transformBook(book));
    }
    _transformBook(book){
        return {
            label: book.label,
            author: book.author,
            important: book.important,
            liked: book.liked,
            id: book.id
        }
    }
}
export default BooksService;