export async function rootLoader() {
  console.log('fetched');
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Could not fetch products.');
    }
    const products = await response.json();
    return { products };
  } catch (error) {
    return { products: null, error: error };
  }
}
