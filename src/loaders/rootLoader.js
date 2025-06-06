export async function rootLoader() {
  const response = await fetch('https://fakestoreapi.com/products');
  console.log('fetched');
  try {
    if (!response.ok) {
      throw new Error('Could not fetch products.');
    }
    const products = await response.json();
    return { products };
  } catch (error) {
    return { products: null, error: error };
  }
}
