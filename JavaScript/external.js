function externalfunc(){
    alert('External js Bitch!!');
}
 // var Keyword
 {
    //global scope
    var var1="sdf";
   console.log(var1);
   var1="dwrt";
   console.log(var1);
   var var1="sdf";
   console.log(var1);
}
// let Keyword
{
    //local scope
    let var2='1234';
    console.log(var2)
    var2='2341';
    console.log(var2);
    // no re-declaration
}
// const Keyword
{
    const var3="Teju";
    console.log(var3);
    //no redeclaration and re-assign
}