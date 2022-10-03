
export default class calculadora{

    static soma(a,b) {
        return a + b
    }

    static sub(a,b){
        return a-b
    }

    static multiplicação(a,b){
        return a*b
    }

    static divisão(a,b){
        return a/b
    }
                                                                                         
   static max(a,b) {
    if (a>b)
    return a;
    else return b;
   }

   static max(a,b,c) {
    if (a>b)
    return a;
    if (b>a)
    return b;
    else return c;
   }

   static media(a,b) {
    return (a+b)/2
}

    static media(a,b,c) {
    return (a+b)/2 
}         

  static desconto(a,b,c) {
       return (a*b) / c

}}