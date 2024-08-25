function Chai(){
    return (
        <> 
            <h3>Chai is ready</h3>
        </>
    )
}
export default Chai;

// Note: <>...</>: enclosing brackets is fragment to wrap all content because jsx expect all content to wrap into a root element.
// so either we can use div but it can create deep level multiple empty element in dom but fragment will not show in DOM.