import logo from './logo.svg';
import './App.css';
import Sidebar from './shared/Sidebar';

function App() {
  const productList = [
    {
      categoryName: 'Mobile',
      brand: [{
        brandName: 'Apple',
        product: [{
          productName: 'iphone 8',
          variant: [{
            variantName: '128 GB'
          }, {
            variantName: '256 GB'
          }]
        }, {
          productName: 'iphone X',
          variant: [{
            variantName: '64 GB'
          }, {
            variantName: '128 GB'
          }]
        }]
      },
      {
        brandName: 'Nokia'
      }]
    },
    {
      categoryName: 'Phones',
      brand: [{
        brandName: 'Apple',
        product: [{
          productName: 'iPhone 11',
          variant: [{
            variantName: '32 GB'
          }]
        }, {
          productName: 'iphone 12',
          variant: [{
            variantName: '32 GB'
          }, {
            variantName: '64 GB'
          }]
        }]
      },
      {
        brandName: 'Nokia',
        product: [{
          productName: 'Nokia G21',
          variant: [{
            variantName: '16 GB'
          }]
        }, {
          productName: 'Nokia C01 Plus',
          variant: [{
            variantName: '128 GB'
          }, {
            variantName: '256 GB'
          }]
        }]
      }]
    },
    {
      categoryName: 'Watches', brand: [{
        brandName: 'Apple',
        product: [{
          productName: 'Apple Watch Series',
          variant: [{
            variantName: 'Series 3'
          }, {
            variantName: 'Series 7'
          }]
        }, {
          productName: 'Apple Watch Nike',
          variant: [{
            variantName: 'Nike'
          }]
        }]
      },
      ]
    },
    {
      categoryName: 'Computers', brand: [{
        brandName: 'Apple',
        product: [{
          productName: 'MacBook Air',
          variant: [{
            variantName: '512 GB'
          }, {
            variantName: '1024 GB'
          }]
        }, {
          productName: 'MacBook Pro',
          variant: [{
            variantName: '1024 GB'
          }, {
            variantName: '2048 GB'
          }]
        }]
      }]
    }
  ]
  return (
    <div className="container">
      <div className="App">
        <h2>Browse Products</h2>
        <Sidebar productList={productList}/>
      </div>
    </div>
  );
}

export default App;
