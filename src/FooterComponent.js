const FooterComponent = ({ length }) => {

  return (
    <footer>
        <p>
            {length} List {length === 1 ? "Item " :  "Items" }
        </p>
    </footer>
  )
}

export default FooterComponent