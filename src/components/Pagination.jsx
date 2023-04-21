function Pagination({ page, itemCount, itemPerPage, setPage }) {
    const totalPageCount = Math.ceil(itemCount / itemPerPage);
    const start = page - 3 > 0 ? page - 3 : 1;
    const end = page + 3;
    console.log(start, end);
    const pages = [];
    for (let i = start; i <= end && i <= totalPageCount; i++) {
        pages.push(
            <li onClick={() => setPage(i)} className={i === page ? "active" : ""} key={i}>
                {i}
            </li>
        );
    }
    return <ul id="pagination">{pages}</ul>;
}

export default Pagination;
