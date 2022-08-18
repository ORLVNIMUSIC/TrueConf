/**
 * Standart interface for all figures
 *
 * All figurs must implement all methods of the interface
 */
export default interface Figure {
  /**
   * Method for calculating area of the object
   * @returns the object's area
   */
  area(): number;

  /**
   * Method for calculating perimeter of the object
   * @returns the object's perimeter
   */
  perimeter(): number;
}
