export default function List ({ children, list }) {
    return list.map((item, index, list) => children(item, index, list));
}
