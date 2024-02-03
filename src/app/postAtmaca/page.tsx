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
                <button type="submit">Update Product Action</button>
            </form>
        </div>
    );
};

export default PostAtmacaPage;
