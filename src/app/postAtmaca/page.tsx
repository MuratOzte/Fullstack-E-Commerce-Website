'use client';
import sendProductAction from '@/lib/sendProductAction';
import updateProductAction from '@/lib/updateProductAction';

const PostAtmacaPage = () => {
    return (
        // sendProductAction
        <div style={{ display: 'flex', gap: 100, textAlign: 'center' }}>
            <form action={sendProductAction}>
                <input type="text" placeholder="Name" name="name" />
                <br />
                <input type="text" placeholder="price" name="price" />
                <br />
                <input
                    type="text"
                    placeholder="description"
                    name="description"
                />
                <br />
                <input type="text" placeholder="image" name="image" />
                <br />
                <input type="text" placeholder="dealer" name="dealer" />
                <br />
                <input type="text" placeholder="star" name="star" />
                <br />
                <input type="text" placeholder="sellCount" name="sellCount" />
                <br />
                <input type="text" placeholder="Ram" name="ram" />
                <br />
                <input type="text" placeholder="Storage" name="storage" />
                <br />
                <input type="text" placeholder="Battery" name="battery" />
                <br />
                <button type="submit">Send Product Action</button>
            </form>
            {/* updateProductAction */}
            <form action={updateProductAction}>
                <label htmlFor="name">name</label>
                <input type="text" placeholder="Name" name="name" />
                <br />
                <label htmlFor="star">star</label>
                <input type="text" placeholder="star" name="star" />
                <br />
                <label htmlFor="sellCount">sellCount</label>
                <input type="text" placeholder="sellCount" name="sellCount" />
                <br />
                <label htmlFor="ram">ram</label>
                <input type="text" placeholder="Ram" name="ram" />
                <br />
                <label htmlFor="storage">storage</label>
                <input type="text" placeholder="Storage" name="storage" />
                <br />
                <label htmlFor="battery">battery</label>
                <input type="text" placeholder="Battery" name="battery" />
                <br />
                <button type="submit">Update Product</button>
            </form>
        </div>
    );
};

export default PostAtmacaPage;
