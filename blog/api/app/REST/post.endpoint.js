'use strict';
import business from '../business/business.container';
import auth from "../middleware/auth";
const postEndpoint = (router) => {
  router.get('/api/posts',auth, async (request, response, next)=> {
    try {
      let result = await
        business(request).getPostManager().query();
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  });
};
export default postEndpoint;
