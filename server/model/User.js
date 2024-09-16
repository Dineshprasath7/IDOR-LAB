class User {
    constructor(id, name, phn_num, clg, country, role_id, role) {
        this._id = id;
        this._name = name;
        this._phn_num = phn_num;
        this._clg = clg;
        this._country = country;
        this._role = role;
        this._role_id = role_id;
    }
    get id(){
        return this._id;
    }

    get name() {
        return this._name;
    }

    get phn_num() {
        return this._phn_num;
    }

    get clg() {
        return this._clg;
    }

    get country() {
        return this._country;
    }

    get role() {
        return this._role;
    }

    get role_id() {
        return this._role_id;
    }
    toJSON() {
        return {
            name: this._name,
            phn_num: this._phn_num,
            clg: this._clg,
            country: this._country,
            role: this._role,
            role_id: this._role_id
        };
    }
}
module.exports = User