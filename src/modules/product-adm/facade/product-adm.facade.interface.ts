//dto, ideal deixar em outro arquivo.
export interface AddProductFacadeInputDto{
    id?: string
    name: string
    description: string
    purchasePrice: number
    stock: number
}

export interface CheckStockFacadeInputDto{
    productId: string
}

export interface CheckStockFacadeOutputDto{
    productId: string
    stock: number
}

//quem quiser falar com este modulo sabera que ha dois metodos a usar mas nao sabera como foi implementado 
export default interface ProductAdmFacadeInterface {
    
    addProduct(input: AddProductFacadeInputDto): Promise<void>
    checkStock(input: CheckStockFacadeInputDto): Promise<CheckStockFacadeOutputDto>

}