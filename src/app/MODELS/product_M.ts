export class Product {
  constructor(
    public productId: number,
    public productName: string,
    public productQuantity: number,  // Optionnel
    public reorderPoint: number      // Optionnel
  ) {}
}

