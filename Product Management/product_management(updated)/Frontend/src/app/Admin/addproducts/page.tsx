import React from 'react';

export default function addproduct() {
    return (
        <>
            <h2>Add Product</h2>
            
            <label htmlFor="name">Product Name:</label>
                <input type="text" id="ID"  required /><br /><br />
                <label htmlFor="ID">Product ID:</label>
                <input type="text" id="name" name="name" required /><br /><br />

                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price" min="0.01" step="0.01" required /><br /><br />

                <label htmlFor="description">Description:</label><br />
                <textarea id="description" name="description"  required></textarea><br /><br />

                <input type="submit" value="Add Product" />
          
        </>
    );
}
