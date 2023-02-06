
    
    let fname = 'Muhammd '
    let lName = "Ameen"

    let container = React.createElement('h1',{id:'container'},[fname,lName]);
   let heading =  React.createElement('h2',{
    id:'title',
    class:"titleClass" //this object takes the attributes for the h2 tag that we created.
   },container);
   // this creates heading tag.
   let root =  ReactDOM.createRoot(document.getElementById('root'));
   //this creates a root element.
   root.render(heading);
   // this renders the element into the tag root.


