'use client';
import sendProductAction from '@/lib/sendProductAction';

const PostAtmacaPage = () => {
    return (
        <>
            <h1>Post Atmaca Page</h1>
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
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default PostAtmacaPage;
