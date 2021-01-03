import React from 'react';
import Skeleton from "react-loading-skeleton";

function SkeletonContact(props) {
    return (
        <div className="skeletonContact">
            <div className="avatarSkeleton">
                <Skeleton circle={true} width={50} height={50} />
            </div>
            <div className="skeleton">
                <Skeleton count={2} />
            </div>
        </div>
    );
}

export default SkeletonContact;
