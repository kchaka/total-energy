export interface ProductInterface {
  /**
   * Id of Product.
   */
  id?: number;

  /**
   * Product's Name.
   */
  name: string;

  /**
   * Product's Category
   */
  category: string;

  /**
   * Product's SKU
   */
  sku: string;

  /**
   * Product's Price
   */
  price: number;

  /**
   * Product's Quantity
   */
  quantity: number;

  /**
   * Created date of Product (timestamp).
   */
  created_at?: number;

  /**
   * Updated date of Product (timestamp).
   */
  updated_at?: number;
}
