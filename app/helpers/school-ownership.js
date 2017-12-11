import { helper } from '@ember/component/helper';

export function schoolOwnership(type) {
    let _type = null;
    switch (parseInt(type)) {
        case 1:
            _type = "Public";
            break;
        case 2:
            _type = "Private non-profit";
            break;
        case 3:
            _type = "Private for-profit";
            break;
        default:
            _type = "Not classified";
    }
    return _type;
}

export default helper(schoolOwnership);
