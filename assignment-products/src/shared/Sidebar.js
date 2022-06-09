function Sidebar(props) {
  var productList = props.productList;
  return (
      <>
        <div className="printProductList">
          <ul>
            {productList.length > 0 && productList.map((category, categoryIndex) => (
              <>
                <li key={categoryIndex}>
                  <input type="checkbox" /> {category.categoryName}
                  {category.brand.length > 0 && (
                    <ul>
                      {category.brand.map((brandLoop, brandIndex) => (
                        <>
                          <li key={brandLoop.brandName+categoryIndex+brandIndex}>
                          <input type="checkbox" /> {brandLoop.brandName}
                          {brandLoop?.product && brandLoop?.product.length>0 && (
                            <ul>
                              {brandLoop?.product.map((productLoop, productIndex)=> (
                                <>
                                  <li key={brandLoop.brandName+categoryIndex+brandIndex+productIndex}>
                                    <input type="checkbox" /> {productLoop.productName}
                                    {productLoop?.variant.length>0 && (
                                      <ul>
                                        {productLoop?.variant.map((variantLoop, variantIndex) => (
                                          <li>
                                            <input type="checkbox" /> {variantLoop.variantName}
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                    
                                  </li>
                                </>
                              ))}
                            </ul>
                            )}
                          </li>
                        </>
                      ))}
                    </ul>
                  )}
                </li>
              </>
            ))}

          </ul>
          </div>
      </>
  );
}

export default Sidebar;
