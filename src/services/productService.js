const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/products`;

const index = async () => {
    try {
        const res = await fetch(BASE_URL,{
            headers: { 
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        return res.json()

    } catch (error) {
        console.log(error)
    }
}

const show = async (productId) => {
    try {
        const res = await fetch(`${BASE_URL}/${productId}`,{
            headers: { 
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })

        return res.json()

    } catch (error) {
        console.log(error)
    }
}

const create = async (productFormData) => {
    try {
        const res = await fetch(BASE_URL,{
            method:'POST',
            headers: { 
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type':'application/json'
            },
            body: JSON.stringify(productFormData)
        })

        return res.json()

    } catch (error) {
        console.log(error)
    }
}

const createReview = async (productId, reviewFormData) => {
    try {
      const res = await fetch(`${BASE_URL}/${productId}/reviews`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewFormData),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const res = await fetch(`${BASE_URL}/${productId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const update = async(productId, productFormData) => {
    try {
      const res = await fetch(`${BASE_URL}/${productId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productFormData),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  }

export {
    index,
    show,
    create,
    createReview,
    deleteProduct,
    update,
}