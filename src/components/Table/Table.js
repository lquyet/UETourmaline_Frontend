import TableItem from "./TableItem";
import style from "./Table.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function Table({ itemsData }) {
    const listItems = itemsData.map((item) => {
        <TableItem key={item[0]} data={item}></TableItem>;
    });

    return (
        <div className={cx('wrapper')}>
            <table className={cx('table')}>{listItems}</table>
        </div>
    );
}
export default Table;
