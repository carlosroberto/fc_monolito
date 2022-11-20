import AddProductUseCase from "./add-product.usecase"

//fazendo um mock com jest
const MockRepository = () => {
    return {
        add: jest.fn(),
        find: jest.fn(),
    }
}

describe("Add product usecase unit test",() => {

    it("should add a product", async () => {
        //repositorio
        //const productRepository = new ProductRepository()
        const productRepository = MockRepository()

        //usecase
        const usecase = new AddProductUseCase(productRepository)
        //input - dados que vou colocar no dto
        const input = {
            name: "Product 1",
            description : "Product 1 desc",
            purchasePrice : 100,
            stock : 10 

        }
        
        const result = await usecase.execute(input)
        //output

        //se nao colocar um away la no result então os id, name, etc terá esse erro
        //  Property 'id' does not exist on type 'Promise<AddProductOutputDto>'.ts(2339)
        //  add-product.usecase.spec.ts(34, 23): Did you forget to use 'await'?
        expect(productRepository.add).toHaveBeenCalled() //garantir que o repository e o add são chamados
        expect(result.id).toBeDefined
        expect(result.name).toBe(input.name)
        expect(result.description).toBe(input.description)
        expect(result.purchasePrice).toBe(input.purchasePrice)
        expect(result.stock).toBe(input.stock)



    })

})