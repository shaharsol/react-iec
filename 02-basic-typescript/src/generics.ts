class Base {

}

class Product extends Base{
    id: number
    name: string
    price: number
}

class Employee extends Base{
    id: number
    name: string
    salary: number
}

function getEntity<T extends Base>(isProduct: boolean): T {
    // if(isProduct) return new Product{
    //     id: 1,
    //     name: 'iphone',
    //     price: 3
    // } as T
    // else return {
    //     id: 2,
    //     name: 'yossi',
    //     salary: 500
    // } as T
    
}

const something = getEntity<Product>(true)
const somethingElse = getEntity<string>(false)