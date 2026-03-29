import { useState, ChangeEvent, FormEvent } from 'react';
import { Trash2, Upload, Plus, Package, ShoppingBag, Image as ImageIcon } from 'lucide-react';

// Types
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface Order {
  id: string;
  customer: string;
  date: string;
  total: number;
  status: string;
}

export default function Admin() {
  const [activeTab, setActiveTab] = useState<'products' | 'orders'>('products');

  // --- MOCK STATE ---
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "T-Shirt Oversize Noir", price: 2500, image: "" },
    { id: 2, name: "Pantalon Cargo Kaki", price: 4500, image: "" }
  ]);

  const [orders, setOrders] = useState<Order[]>([
    { id: "SPK-00125", customer: "Karim D.", date: "29 Mars 2026", total: 7500, status: "Nouvelle" },
    { id: "SPK-00124", customer: "Sarah B.", date: "28 Mars 2026", total: 3200, status: "En livraison" },
    { id: "SPK-00123", customer: "Ahmed M.", date: "27 Mars 2026", total: 5100, status: "Livrée" }
  ]);

  // --- PRODUCT FORM STATE ---
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductImage, setNewProductImage] = useState('');

  // --- HANDLERS : PRODUCTS ---
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Create a local URL for the uploaded image to preview it
      const imageUrl = URL.createObjectURL(file);
      setNewProductImage(imageUrl);
    }
  };

  const handleAddProduct = (e: FormEvent) => {
    e.preventDefault();
    if (!newProductName || !newProductPrice) return;

    const newProduct: Product = {
      id: Date.now(),
      name: newProductName,
      price: Number(newProductPrice),
      image: newProductImage
    };

    setProducts([newProduct, ...products]);
    setNewProductName('');
    setNewProductPrice('');
    setNewProductImage('');
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
  };

  // --- HANDLERS : ORDERS ---
  const handleDeleteLastOrder = () => {
    if (orders.length === 0) return;
    // Assuming the first item in the array is the newest/last order
    setOrders(orders.slice(1));
  };

  const handleDeleteOrder = (id: string) => {
    setOrders(orders.filter(o => o.id !== id));
  };

  return (
    <div className="w-full bg-background min-h-screen pb-24">
      {/* Admin Header */}
      <div className="bg-primary text-primary-foreground py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tighter uppercase">Espace Admin</h1>
            <p className="text-primary-foreground/70 text-sm">Gérez vos produits et vos commandes</p>
          </div>
          <div className="flex bg-primary-foreground/10 p-1 rounded-lg">
            <button 
              onClick={() => setActiveTab('products')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${activeTab === 'products' ? 'bg-primary-foreground text-primary' : 'hover:bg-primary-foreground/20'}`}
            >
              <Package className="h-4 w-4" /> Produits
            </button>
            <button 
              onClick={() => setActiveTab('orders')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${activeTab === 'orders' ? 'bg-primary-foreground text-primary' : 'hover:bg-primary-foreground/20'}`}
            >
              <ShoppingBag className="h-4 w-4" /> Commandes
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* ================= PRODUCTS TAB ================= */}
        {activeTab === 'products' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Add Product Form */}
            <div className="lg:col-span-1">
              <div className="bg-secondary/30 p-6 rounded-2xl border border-border sticky top-24">
                <h2 className="text-xl font-bold uppercase tracking-wider mb-6">Ajouter un produit</h2>
                <form onSubmit={handleAddProduct} className="space-y-4">
                  
                  {/* Image Upload */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Image du produit</label>
                    <div className="border-2 border-dashed border-border rounded-xl p-4 text-center hover:bg-secondary/50 transition-colors relative cursor-pointer">
                      <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      {newProductImage ? (
                        <div className="relative aspect-square w-full max-w-[150px] mx-auto rounded-lg overflow-hidden">
                          <img src={newProductImage} alt="Preview" className="object-cover w-full h-full" />
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center py-4 text-muted-foreground">
                          <Upload className="h-8 w-8 mb-2" />
                          <span className="text-sm">Cliquez pour uploader</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nom du produit</label>
                    <input 
                      type="text" 
                      required
                      value={newProductName}
                      onChange={(e) => setNewProductName(e.target.value)}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" 
                      placeholder="Ex: Veste en jean" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Prix (DZD)</label>
                    <input 
                      type="number" 
                      required
                      value={newProductPrice}
                      onChange={(e) => setNewProductPrice(e.target.value)}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50" 
                      placeholder="Ex: 4500" 
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-3 mt-4 bg-primary text-primary-foreground text-sm font-bold uppercase rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <Plus className="h-4 w-4" /> Ajouter
                  </button>
                </form>
              </div>
            </div>

            {/* Products List */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-bold uppercase tracking-wider mb-6">Liste des produits ({products.length})</h2>
              
              {products.length === 0 ? (
                <div className="text-center py-12 bg-secondary/20 rounded-2xl border border-dashed border-border text-muted-foreground">
                  Aucun produit disponible.
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {products.map((product) => (
                    <div key={product.id} className="flex gap-4 p-4 bg-background border border-border rounded-xl shadow-sm">
                      <div className="w-20 h-24 bg-secondary rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center">
                        {product.image ? (
                          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        ) : (
                          <ImageIcon className="h-6 w-6 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <h3 className="font-bold text-sm line-clamp-2">{product.name}</h3>
                          <p className="text-primary font-medium mt-1">{product.price} DZD</p>
                        </div>
                        <div className="flex justify-end">
                          <button 
                            onClick={() => handleDeleteProduct(product.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-md transition-colors flex items-center gap-1 text-xs font-medium"
                          >
                            <Trash2 className="h-4 w-4" /> Supprimer
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= ORDERS TAB ================= */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h2 className="text-xl font-bold uppercase tracking-wider">Liste des commandes ({orders.length})</h2>
              
              <button 
                onClick={handleDeleteLastOrder}
                disabled={orders.length === 0}
                className="px-4 py-2 bg-red-50 text-red-600 border border-red-200 rounded-lg text-sm font-bold hover:bg-red-100 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Trash2 className="h-4 w-4" /> Supprimer la dernière commande
              </button>
            </div>

            {orders.length === 0 ? (
              <div className="text-center py-12 bg-secondary/20 rounded-2xl border border-dashed border-border text-muted-foreground">
                Aucune commande pour le moment.
              </div>
            ) : (
              <div className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-secondary/50 border-b border-border">
                      <tr>
                        <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">ID Commande</th>
                        <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Client</th>
                        <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Date</th>
                        <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Total</th>
                        <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs">Statut</th>
                        <th className="px-6 py-4 font-bold uppercase tracking-wider text-xs text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {orders.map((order) => (
                        <tr key={order.id} className="hover:bg-secondary/20 transition-colors">
                          <td className="px-6 py-4 font-medium">{order.id}</td>
                          <td className="px-6 py-4">{order.customer}</td>
                          <td className="px-6 py-4 text-muted-foreground">{order.date}</td>
                          <td className="px-6 py-4 font-bold">{order.total} DZD</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                              order.status === 'Nouvelle' ? 'bg-blue-100 text-blue-700' :
                              order.status === 'En livraison' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-green-100 text-green-700'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button 
                              onClick={() => handleDeleteOrder(order.id)}
                              className="text-red-500 hover:text-red-700 p-2 rounded-md hover:bg-red-50 transition-colors inline-flex"
                              title="Supprimer cette commande"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
