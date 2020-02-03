const apiKey =
  "Fx46kldzklg18cn4dejUr3jdgoDCrX1RO6UWrzayDjwy2wonCi5oM_U6b5OR-RxTnGWElq0MxtGQdT6NvxCOwvc8BucEsWauvZWi3oyYyA_f6z5HwXZHMATbqVc4XnYx";

const Yelp = {
  search(term, location, sortBy) {
    // Fetch API
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }
    )
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.address,
              city: business.city,
              state: business.state,
              zipCode: business.zip_code,
              category: business.category
            };
          });
        }
      });
  }
};
