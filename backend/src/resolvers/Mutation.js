const Mutations = {
    async createItem(parent, args, context, info) {
        //Todo check if they are logged in

        const item = await context.db.mutation.createItem({
            data: { ...args }
        }, info);

        return item;
    }
}; 

module.exports = Mutations;
